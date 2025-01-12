using BaseLibrary.Entities;
using BaseLibrary.Responses;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using ServerLibrary.Data;
using ServerLibrary.Repositories.Contracts;

namespace ServerLibrary.Repositories.Implementations
{
    public class BranchRepository(AppDbContext appDbContext) : IGenericRepositoryInterface<Branch>
    {
        public async Task<GeneralResponse> DeleteById(int id)
        {
            var dep = await appDbContext.branches.FindAsync(id);
            if (dep is null) return NotFound();

            appDbContext.branches.Remove(dep);
            await Commit();
            return Success();
        }

        public async Task<List<Branch>> GetAll()=> await appDbContext.branches.AsNoTracking().Include(x=>x.Department).ToListAsync();


        public async Task<Branch> GetById(int id) => await appDbContext.branches.FindAsync(id);
        

        public async Task<GeneralResponse> Insert(Branch item)
        {
            if (!await CheckName(item.Name)) return new GeneralResponse(false, "Department already added");
            appDbContext.branches.Add(item);
            await Commit();
            return Success();
        }

        public async Task<GeneralResponse> Update(Branch item)
        {
            var dep = await appDbContext.branches.FindAsync(item.Id);
            if (dep is null) return NotFound();
            dep.Name = item.Name;
            dep.DepartmentId = item.DepartmentId;
            await Commit();
            return Success();
        }

        private async Task Commit() => await appDbContext.SaveChangesAsync();
        private static GeneralResponse NotFound() => new(false, "Sorry department not found");
        private static GeneralResponse Success() => new(true, "Process Completed");
        private async Task<bool> CheckName(string name)
        {
            var item = await appDbContext.branches.FirstOrDefaultAsync(x => x.Name!.ToLower().Equals(name.ToLower()));
            return item is null;
        }
    }
}
