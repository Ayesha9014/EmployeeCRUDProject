using BaseLibrary.Entities;
using BaseLibrary.Responses;
using Microsoft.EntityFrameworkCore;
using ServerLibrary.Data;
using ServerLibrary.Repositories.Contracts;

namespace ServerLibrary.Repositories.Implementations
{
    public class CountryRepository(AppDbContext appDbContext) : IGenericRepositoryInterface<Country>
    {
        public async Task<GeneralResponse> DeleteById(int id)
        {
            var dep = await appDbContext.countries.FindAsync(id);
            if (dep is null) return NotFound();

            appDbContext.countries.Remove(dep);
            await Commit();
            return Success();
        }

        public async Task<List<Country>> GetAll() => await appDbContext.countries.ToListAsync();


        public async Task<Country> GetById(int id) => await appDbContext.countries.FindAsync(id);

        public async Task<GeneralResponse> Insert(Country item)
        {
            if (!await CheckName(item.Name)) return new GeneralResponse(false, "Department already added");
            appDbContext.countries.Add(item);
            await Commit();
            return Success();
        }

        public async Task<GeneralResponse> Update(Country item)
        {
            var dep = await appDbContext.countries.FindAsync(item.Id);
            if (dep is null) return NotFound();
            dep.Name = item.Name;
            await Commit();
            return Success();
        }

        private async Task Commit() => await appDbContext.SaveChangesAsync();
        private static GeneralResponse NotFound() => new(false, "Sorry department not found");
        private static GeneralResponse Success() => new(true, "Process Completed");
        private async Task<bool> CheckName(string name)
        {
            var item = await appDbContext.countries.FirstOrDefaultAsync(x => x.Name!.ToLower().Equals(name.ToLower()));
            return item is null;
        }
    }
}
