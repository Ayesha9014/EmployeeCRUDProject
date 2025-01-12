using BaseLibrary.Entities;
using BaseLibrary.Responses;
using Microsoft.EntityFrameworkCore;
using ServerLibrary.Data;
using ServerLibrary.Repositories.Contracts;

namespace ServerLibrary.Repositories.Implementations
{
    public class CityRepository(AppDbContext appDbContext) : IGenericRepositoryInterface<City>
    {
        public async Task<GeneralResponse> DeleteById(int id)
        {
            var dep = await appDbContext.citys.FindAsync(id);
            if (dep is null) return NotFound();

            appDbContext.citys.Remove(dep);
            await Commit();
            return Success();
        }

        public async Task<List<City>> GetAll() => await appDbContext.citys.AsNoTracking().Include(x=>x.Country).ToListAsync();

        public async Task<City> GetById(int id) => await appDbContext.citys.FindAsync(id);

        public async Task<GeneralResponse> Insert(City item)
        {
            if (!await CheckName(item.Name)) return new GeneralResponse(false, "Department already added");
            appDbContext.citys.Add(item);
            await Commit();
            return Success();
        }

        public async Task<GeneralResponse> Update(City item)
        {
            var dep = await appDbContext.citys.FindAsync(item.Id);
            if (dep is null) return NotFound();
            dep.Name = item.Name;
            dep.CountryId = item.CountryId;
            await Commit();
            return Success();
        }
        private async Task Commit() => await appDbContext.SaveChangesAsync();
        private static GeneralResponse NotFound() => new(false, "Sorry department not found");
        private static GeneralResponse Success() => new(true, "Process Completed");
        private async Task<bool> CheckName(string name)
        {
            var item = await appDbContext.citys.FirstOrDefaultAsync(x => x.Name!.ToLower().Equals(name.ToLower()));
            return item is null;
        }
    }
}
