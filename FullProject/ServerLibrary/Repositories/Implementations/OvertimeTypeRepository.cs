using BaseLibrary.Entities;
using BaseLibrary.Responses;
using Microsoft.EntityFrameworkCore;
using ServerLibrary.Data;
using ServerLibrary.Repositories.Contracts;

namespace ServerLibrary.Repositories.Implementations
{
    public class OvertimeTypeRepository(AppDbContext appDbContext) : IGenericRepositoryInterface<OvertimeType>
    {
        public async Task<GeneralResponse> DeleteById(int id)
        {
            var item = await appDbContext.OvertimesTypes.FindAsync(id);
            if (item is null) return NotFound();

            appDbContext.OvertimesTypes.Remove(item);
            await Commit();
            return Success();
        }

        public async Task<List<OvertimeType>> GetAll() =>
        await appDbContext.OvertimesTypes.AsNoTracking().ToListAsync();

        public async Task<OvertimeType> GetById(int id) => await appDbContext.OvertimesTypes.FindAsync(id);

        public async Task<GeneralResponse> Insert(OvertimeType item)
        {
            if (!await CheckName(item.Name!)) return new GeneralResponse(false, "Overtime Type already added");
            appDbContext.OvertimesTypes.Add(item);
            await Commit();
            return Success();
        }

        public async Task<GeneralResponse> Update(OvertimeType item)
        {
           var obj = await appDbContext.OvertimesTypes.FindAsync(item.Id);
            if (obj is null) return NotFound();
            obj.Name = item.Name;
            await Commit();
            return Success();
        }
        private async Task Commit() => await appDbContext.SaveChangesAsync();
        private static GeneralResponse NotFound() => new(false, "Sorry Overtime type not found");
        private static GeneralResponse Success() => new(true, "Process completed");
        private async Task<bool> CheckName(string name)
        {
            var item = await appDbContext.OvertimesTypes.FirstOrDefaultAsync(x=>x.Name!.ToLower().Equals(name.ToLower()));
            return item is null;
        }
    }
}
