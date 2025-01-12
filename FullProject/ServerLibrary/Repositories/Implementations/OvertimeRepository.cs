using BaseLibrary.Entities;
using BaseLibrary.Responses;
using Microsoft.EntityFrameworkCore;
using ServerLibrary.Data;
using ServerLibrary.Repositories.Contracts;

namespace ServerLibrary.Repositories.Implementations
{
    public class OvertimeRepository(AppDbContext appDbContext) : IGenericRepositoryInterface<Overtime>
    {
        public async Task<GeneralResponse> DeleteById(int id)
        {
            var item = await appDbContext.Overtimes.FirstOrDefaultAsync(x=>x.EmployeeId == id);
            if(item is null) return NotFound();
            appDbContext.Overtimes.Remove(item);
            await Commit();
            return NotFound();
        }

        public async Task<List<Overtime>> GetAll()=>await appDbContext.Overtimes.AsNoTracking().Include(x=>x.OvertimeType).ToListAsync();


        public async Task<Overtime> GetById(int id) => await appDbContext.Overtimes.FirstOrDefaultAsync(x => x.EmployeeId == id);
        
        public async Task<GeneralResponse> Insert(Overtime item)
        {
           appDbContext.Overtimes.Add(item);
            await Commit();
            return Success();
        }

        public async Task<GeneralResponse> Update(Overtime item)
        {
            var obj = await appDbContext.Overtimes.FirstOrDefaultAsync(x=>x.EmployeeId==item.EmployeeId);
            if(obj is null) return NotFound();
            obj.StartDate = item.StartDate;
            obj.EndDate = item.EndDate;
            obj.OverTimeTypeId = item.OverTimeTypeId;
            await Commit();
            return Success();
        }
        private async Task Commit() => await appDbContext.SaveChangesAsync();
        private static GeneralResponse NotFound() => new(false, "Sorry data not found");
        private static GeneralResponse Success() => new(true, "Process completed");
    }
}
