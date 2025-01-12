using BaseLibrary.Entities;
using BaseLibrary.Responses;
using Microsoft.EntityFrameworkCore;
using ServerLibrary.Data;
using ServerLibrary.Repositories.Contracts;

namespace ServerLibrary.Repositories.Implementations
{
    public class TownRepository(AppDbContext appDbContext) : IGenericRepositoryInterface<Town>
    {
        public async Task<GeneralResponse> DeleteById(int id)
        {
            var dep = await appDbContext.towns.FindAsync(id);
            if (dep is null) return NotFound();

            appDbContext.towns.Remove(dep);
            await Commit();
            return Success();
        }

        public async Task<List<Town>> GetAll() => await appDbContext.towns.AsNoTracking().Include(x=>x.City).ToListAsync();

        public async Task<Town> GetById(int id) => await appDbContext.towns.FindAsync(id);


        public async Task<GeneralResponse> Insert(Town item)
        {
            if (!await CheckName(item.Name)) return new GeneralResponse(false, "Department already added");
            appDbContext.towns.Add(item);
            await Commit();
            return Success();
        }

        public async Task<GeneralResponse> Update(Town item)
        {
            var dep = await appDbContext.towns.FindAsync(item.Id);
            if (dep is null) return NotFound();
            dep.Name = item.Name;
            dep.CityId = item.CityId;
            await Commit();
            return Success();
        }
        private async Task Commit() => await appDbContext.SaveChangesAsync();
        private static GeneralResponse NotFound() => new(false, "Sorry Town not found");
        private static GeneralResponse Success() => new(true, "Process Completed");
        private async Task<bool> CheckName(string name)
        {
            var item = await appDbContext.towns.FirstOrDefaultAsync(x => x.Name!.ToLower().Equals(name.ToLower()));
            return item is null;
        }
    }
}
