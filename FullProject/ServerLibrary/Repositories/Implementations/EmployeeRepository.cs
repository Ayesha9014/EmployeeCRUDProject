using BaseLibrary.Entities;
using BaseLibrary.Responses;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using ServerLibrary.Data;
using ServerLibrary.Repositories.Contracts;

namespace ServerLibrary.Repositories.Implementations
{
    public class EmployeeRepository(AppDbContext appDbContext) : IGenericRepositoryInterface<Employee>
    {
        public async Task<GeneralResponse> DeleteById(int id)
        {
            var item = await appDbContext.employees.FindAsync(id);
            if (item is null) return NotFound();

            appDbContext.employees.Remove(item);
            await Commit();
            return Success();
        }

        public async Task<List<Employee>> GetAll()
        {
            var employees = await appDbContext.employees
                .AsNoTracking()
                .Include(t => t.Town)
                .ThenInclude(x => x.City)
                .ThenInclude(c => c.Country)
                .Include(b => b.Branch)
                .ThenInclude(d => d.Department)
                .ThenInclude(gd => gd.GeneralDepartment)
                .ToListAsync();
            return employees;
        }

        public async Task<Employee> GetById(int id)
        {
            var employee=await appDbContext.employees
                .Include(x=>x.Town)
                .ThenInclude(x=>x.City)
                .ThenInclude(x=>x.Country)
                .Include(x=>x.Branch)
                .ThenInclude(x=>x.Department)
                .ThenInclude(x=>x.GeneralDepartment)
                .FirstOrDefaultAsync(x=> x.Id == id)!;
            return employee!;
        }

        public async Task<GeneralResponse> Insert(Employee item)
        {
            if (!await CheckName(item.Name!)) return new GeneralResponse(false, "Employee already added");
            appDbContext.employees.Add(item);
            await Commit();
            return Success();
        }

        public async Task<GeneralResponse> Update(Employee item)
        {
            var findUser=await appDbContext.employees.FirstOrDefaultAsync(x=>x.Id == item.Id);
            if (findUser is null) return new GeneralResponse(false, "Employees does not exist");

            findUser.Name = item.Name;
            findUser.Other=item.Other;
            findUser.Address = item.Address;
            findUser.TelephoneNumber = item.TelephoneNumber;
            findUser.BranchId = item.BranchId;
            findUser.TownId = item.TownId;
            findUser.CivilId = item.CivilId;
            findUser.FileNumber = item.FileNumber;
            findUser.JobName = item.JobName;
            findUser.Photo = item.Photo;

            await appDbContext.SaveChangesAsync();
            await Commit();
            return Success();
        }

        private async Task Commit() => await appDbContext.SaveChangesAsync();
        private static GeneralResponse NotFound() => new(false, "Sorry employee not found");
        private static GeneralResponse Success() => new(true, "Process completed");
        private async Task<bool> CheckName(string name)
        {
            var item=await appDbContext.employees.FirstOrDefaultAsync(x=>x.Name!.ToLower().Equals(name.ToLower()));
            return item is null ? true: false;
        }
    }
}
