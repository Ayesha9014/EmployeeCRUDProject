using BaseLibrary.Entities;
using Microsoft.EntityFrameworkCore;

namespace ServerLibrary.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Employee> employees { get; set; }

        //Departments
        public DbSet<GeneralDepartment> generalDepartments { get; set; }
        public DbSet<Department> departments { get; set; }
        public DbSet<Branch> branches { get; set; }

        //places
        public DbSet<Town> towns { get; set; }
        public DbSet<Country> countries { get; set; }
        public DbSet<City> citys { get; set; }

        //Authentication
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<SystemRole> SystemRoles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<RefreshTokenInfo> RefreshTokenInfos { get; set; }

        //Other Tables
        public DbSet<Vacation> Vacations { get; set; }
        public DbSet<VacationType> VacationsTypes { get; set; }

        public DbSet<Overtime> Overtimes { get; set; }
        public DbSet<OvertimeType> OvertimesTypes { get; set; }

        public DbSet<Sanction> Sanctions { get; set; }
        public DbSet<SanctionType> SanctionTypes { get; set; }

        public DbSet<Doctor> Doctors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\mssqllocaldb; Database=FinalProject;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GeneralDepartment>().HasData(new GeneralDepartment[] 
            { 
                new GeneralDepartment{Id=1, Name="IT" },
                new GeneralDepartment{ Id=2, Name="Medicine"},
                new GeneralDepartment{ Id=3, Name="Baby Products"}
            });
            modelBuilder.Entity<Department>().HasData(new Department[] 
            { 
                new Department{ Id=1, Name="SQL Server Management", GeneralDepartmentId=1},
                new Department{ Id=2, Name="Angular", GeneralDepartmentId=1},
                new Department{ Id=3, Name="MAUI", GeneralDepartmentId=1},
                new Department{ Id=4, Name="Research & Development", GeneralDepartmentId=2},
                new Department{ Id=5, Name="Quality Assurance", GeneralDepartmentId=2},
                new Department{ Id=6, Name="Production", GeneralDepartmentId=2},
                new Department{ Id=7, Name="Storage", GeneralDepartmentId=3},
                new Department{ Id=8, Name="Food", GeneralDepartmentId=3},
                new Department{ Id=9, Name="Skin Care", GeneralDepartmentId=3}
            });
            modelBuilder.Entity<Branch>().HasData(new Branch[]
           {
                new Branch{Id=1, Name="Branch-I", DepartmentId=1 },
                new Branch{ Id=2, Name="Branch-I", DepartmentId=2},
                new Branch{ Id=3, Name="Branch-I", DepartmentId=3},
                new Branch{ Id=4, Name="Branch-I", DepartmentId=4},
                new Branch{ Id=5, Name="Branch-I", DepartmentId=5},
                new Branch{ Id=6, Name="Branch-I", DepartmentId=6},
                new Branch{ Id=7, Name="Branch-II", DepartmentId=4},
                new Branch{ Id=8, Name="Branch-II", DepartmentId=5},
                new Branch{Id=9, Name="Branch-II", DepartmentId=6},
                new Branch{ Id=10, Name="Branch-II", DepartmentId=7},
                new Branch{ Id=11, Name="Branch-II", DepartmentId=8},
                new Branch{ Id=12, Name="Branch-II", DepartmentId=9},
                new Branch{ Id=13, Name="Branch-III", DepartmentId=5},
                new Branch{ Id=14, Name="Branch-III", DepartmentId=6},
                new Branch{Id=15, Name="Branch-III", DepartmentId=7},
                new Branch{Id=16, Name="Branch-III", DepartmentId=8},
                new Branch{Id=17, Name="Branch-III", DepartmentId=9 }
           });
            modelBuilder.Entity<Country>().HasData(new Country[]
            {
                new Country{Id=1, Name="Bangladesh" },
                new Country{ Id=2, Name="India"},
                new Country{Id=3, Name="Canada" },
                new Country{ Id=4, Name="Nepal"},
                new Country{ Id=5, Name="UAE"}
            });
            modelBuilder.Entity<City>().HasData(new City[]
           {
                new City{ Id=1, Name="Dhaka", CountryId=1},
                new City{Id=2, Name="Chittagong", CountryId=1 },
                new City{ Id=3, Name="Sylhet", CountryId=1},
                new City{ Id=4, Name="Khulna", CountryId=1},
                new City{ Id=5, Name="New Delhi", CountryId=2},
                new City{ Id=6, Name="Mumbai", CountryId=2},
                new City{ Id=7, Name="Toronto", CountryId=3},
                new City{Id=8 , Name="Hamilton", CountryId=3},
                new City{Id=9, Name="Montreal", CountryId = 3},
                new City{Id = 10, Name="Kathmandu", CountryId=4},
                new City{Id=11 , Name="Lalitpur", CountryId=4},
                new City{Id = 12, Name="Dharan", CountryId=4},
                new City{Id = 13, Name="Dubai", CountryId=5},
                new City{ Id=14, Name="Abu Dhabi", CountryId=5},
                new City{Id = 15, Name = "Sharjah", CountryId = 5}
           });
            modelBuilder.Entity<Town>().HasData(new Town[]
            {
                new Town{Id=1, Name="Mirpur",  CityId=1},
                new Town{Id=2, Name="Banani",  CityId=1 },
                new Town{Id=3, Name="Cox's Bazar",  CityId= 2},
                new Town{ Id=4, Name="AramBag",  CityId=3},
                new Town{ Id=5, Name="Farazipara",  CityId=4},
                new Town{Id=6, Name="Mahipalpur",  CityId=5 },
                new Town{Id=7, Name="Andheri",  CityId= 6},
                new Town{Id=8, Name="North York",  CityId= 7},
                new Town{Id=9, Name="Flamborough",  CityId=8 },
                new Town{Id=10, Name="Villeray",  CityId= 9},
                new Town{Id=11, Name="Maharajgunj",  CityId= 10},
                new Town{Id=12, Name="Sanepa",  CityId= 11},
                new Town{ Id=13, Name="Panbari",  CityId=12},
                new Town{ Id=14, Name="Al Quoz",  CityId=13},
                new Town{Id=15, Name="Al Mushrif",  CityId= 14},
                new Town{Id=16, Name="Mafraq Industrial Area",  CityId= 14},
                new Town{ Id=17, Name="Hay Al Atain",  CityId=15}

            });
            modelBuilder.Entity<Employee>().HasData(new Employee[]
            { 
                new Employee
                { 
                 Id=1,
                 CivilId="782346827",
                 FileNumber="121265",
                 JobName="Software Developer",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="893479321",
                 Photo="employee.png",
                 Other="",
                 BranchId=1,
                 TownId=1,
                 Name="Rahim Miah"
                },
                new Employee
                {
                 Id=2,
                 CivilId="8934792187",
                 FileNumber="121264",
                 JobName="Software Developer",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="1984739287",
                 Photo="employee.png",
                 Other="",
                 BranchId=2,
                 TownId=2,
                 Name="Karim"
                },
                new Employee
                {
                 Id=3,
                 CivilId="19834792",
                 FileNumber="121263",
                 JobName="Software Developer",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="984312487432",
                 Photo="employee.png",
                 Other="",
                 BranchId=3,
                 TownId=3,
                 Name="Ratul"
                },

                new Employee
                {
                 Id=4,
                 CivilId="93847913289",
                 FileNumber="121262",
                 JobName="Manager",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="8957981237498",
                 Photo="employee.png",
                 Other="",
                 BranchId=4,
                 TownId=4,
                 Name="Mohib"
                },
                new Employee
                {
                 Id=5,
                 CivilId="18973498127",
                 FileNumber="121261",
                 JobName="Manager",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="98475931279348",
                 Photo="employee.png",
                 Other="",
                 BranchId=5,
                 TownId=5,
                 Name="Osman"
                },
                new Employee
                {
                 Id=6,
                 CivilId="187349178",
                 FileNumber="121260",
                 JobName="Manager",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="89317498321794",
                 Photo="employee.png",
                 Other="",
                 BranchId=6,
                 TownId=6,
                 Name="Ayesha"
                },
                new Employee
                {
                 Id=7,
                 CivilId="33895443",
                 FileNumber="121259",
                 JobName="Manager",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="893427493217",
                 Photo="employee.png",
                 Other="",
                 BranchId=7,
                 TownId=7,
                 Name="Azad"
                },
                new Employee
                {
                 Id=8,
                 CivilId="39827981279",
                 FileNumber="121258",
                 JobName="Manager",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="983479138274",
                 Photo="employee.png",
                 Other="",
                 BranchId=8,
                 TownId=8,
                 Name="Siddika"
                },
                new Employee
                {
                 Id=9,
                 CivilId="8437912834",
                 FileNumber="121257",
                 JobName="Manager",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="89715873749",
                 Photo="employee.png",
                 Other="",
                 BranchId=9,
                 TownId=9,
                 Name="Farjana"
                },
                new Employee
                {
                 Id=10,
                 CivilId="891234798",
                 FileNumber="121256",
                 JobName="Manager",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="9482713718",
                 Photo="employee.png",
                 Other="",
                 BranchId=10,
                 TownId=10,
                 Name="Yeasmin"
                },
                new Employee
                {
                 Id=11,
                 CivilId="8349718324",
                 FileNumber="121255",
                 JobName="Operator",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="8513497493",
                 Photo="employee.png",
                 Other="",
                 BranchId=11,
                 TownId=11,
                 Name="Raju"
                },
                new Employee
                {
                 Id=12,
                 CivilId="1893247982",
                 FileNumber="121254",
                 JobName="Operator",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="9435712837498",
                 Photo="employee.png",
                 Other="",
                 BranchId=12,
                 TownId=12,
                 Name="Akib"
                },
                new Employee
                {
                 Id=13,
                 CivilId="348917283947",
                 FileNumber="121253",
                 JobName="Worker",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="8579938479",
                 Photo="employee.png",
                 Other="",
                 BranchId=13,
                 TownId=13,
                 Name="Rahid"
                },
                new Employee
                {
                 Id=14,
                 CivilId="54389727",
                 FileNumber="121252",
                 JobName="Worker",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="0189734857913",
                 Photo="employee.png",
                 Other="",
                 BranchId=14,
                 TownId=14,
                 Name="Musarraf"
                },
                new Employee
                {
                 Id=15,
                 CivilId="892347113",
                 FileNumber="121251",
                 JobName="Worker",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="891749181990",
                 Photo="employee.png",
                 Other="",
                 BranchId=15,
                 TownId=1,
                 Name="Mehedi"
                },
                new Employee
                {
                 Id=16,
                 CivilId="4378346872",
                 FileNumber="121250",
                 JobName="Worker",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="847391237879`",
                 Photo="employee.png",
                 Other="",
                 BranchId=16,
                 TownId=11,
                 Name="Mitu"
                },
                new Employee
                {
                 Id=17,
                 CivilId="8493217981",
                 FileNumber="121249",
                 JobName="Manager",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="197493879238",
                 Photo="employee.png",
                 Other="",
                 BranchId=17,
                 TownId=12,
                 Name="Moon"
                },
                new Employee
                {
                 Id=18,
                 CivilId="9812473928",
                 FileNumber="121248",
                 JobName="Software Developer",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="78914379821",
                 Photo="employee.png",
                 Other="",
                 BranchId=1,
                 TownId=13,
                 Name="Tuli"
                },
                new Employee
                {
                 Id=19,
                 CivilId="8971239487",
                 FileNumber="121247",
                 JobName="Software Developer",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="98734918391",
                 Photo="employee.png",
                 Other="",
                 BranchId=1,
                 TownId=14,
                 Name="Tasrif"
                },
                new Employee
                {
                 Id=20,
                 CivilId="483729753",
                 FileNumber="121246",
                 JobName="Software Developer",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="18473978127",
                 Photo="employee.png",
                 Other="",
                 BranchId=2,
                 TownId=10,
                 Name="Nahid"
                },
                new Employee
                {
                 Id=21,
                 CivilId="891738429",
                 FileNumber="121245",
                 JobName="Software Developer",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="198723492817",
                 Photo="employee.png",
                 Other="",
                 BranchId=2,
                 TownId=9,
                 Name="Kamrul"
                },
                new Employee
                {
                 Id=22,
                 CivilId="7891349283",
                 FileNumber="121244",
                 JobName="Software Developer",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="891734972832",
                 Photo="employee.png",
                 Other="",
                 BranchId=2,
                 TownId=6,
                 Name="Azim"
                },
                new Employee
                {
                 Id=23,
                 CivilId="984237834",
                 FileNumber="121210",
                 JobName="Software Developer",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="19874392187948",
                 Photo="employee.png",
                 Other="",
                 BranchId=2,
                 TownId=4,
                 Name="Tushar"
                },
                new Employee
                {
                 Id=24,
                 CivilId="3642431234",
                 FileNumber="121211",
                 JobName="Software Developer",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="893127498172",
                 Photo="employee.png",
                 Other="",
                 BranchId=2,
                 TownId=6,
                 Name="Lamiya"
                },
                new Employee
                {
                 Id=25,
                 CivilId="25412413421",
                 FileNumber="121212",
                 JobName="Software Developer",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="1987438927198",
                 Photo="employee.png",
                 Other="",
                 BranchId=1,
                 TownId=2,
                 Name="Rakib"
                },
                new Employee
                {
                 Id=26,
                 CivilId="2541234123",
                 FileNumber="121213",
                 JobName="Worker",
                 Address="Sylhet, Bangaladesh",
                 TelephoneNumber="9148379128",
                 Photo="employee.png",
                 Other="",
                 BranchId=4,
                 TownId=9,
                 Name="Yeasin"
                },
                new Employee
                {
                 Id=27,
                 CivilId="2451234234",
                 FileNumber="121214",
                 JobName="Operator",
                 Address="Shewrapara ,Dhaka, Bangaladesh",
                 TelephoneNumber="3874981278",
                 Photo="employee.png",
                 Other="",
                 BranchId=4,
                 TownId=10,
                 Name="Faruk"
                }
            });
        }
    }
}
