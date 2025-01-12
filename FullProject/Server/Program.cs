using BaseLibrary.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ServerLibrary.Data;
using ServerLibrary.Helpers;
using ServerLibrary.Repositories.Contracts;
using ServerLibrary.Repositories.Implementations;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Jwt Section
builder.Services.Configure<JwtSection>(builder.Configuration.GetSection("JwtSection"));
var jwtSection=builder.Configuration.GetSection(nameof(JwtSection)).Get<JwtSection>();

//connection with context
builder.Services.AddDbContext<AppDbContext>(op=>op.UseSqlServer(builder.Configuration.GetConnectionString("db")));

//Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme=JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme=JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidateLifetime = true,
        ValidIssuer=jwtSection!.Issuer,
        ValidAudience=jwtSection!.Audience,
        IssuerSigningKey=new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSection.Key!))
    };
});



//Add repository
builder.Services.AddScoped<IUserAccount, UserAccountRepository>();

builder.Services.AddScoped<IGenericRepositoryInterface<GeneralDepartment>, GeneralDepartmentRepository>();
builder.Services.AddScoped<IGenericRepositoryInterface<Department>, DepartmentRepository>();
builder.Services.AddScoped<IGenericRepositoryInterface<Branch>, BranchRepository>();

builder.Services.AddScoped<IGenericRepositoryInterface<Country>, CountryRepository>();
builder.Services.AddScoped<IGenericRepositoryInterface<City>, CityRepository>();
builder.Services.AddScoped<IGenericRepositoryInterface<Town>, TownRepository>();

builder.Services.AddScoped<IGenericRepositoryInterface<Overtime>, OvertimeRepository>();
builder.Services.AddScoped<IGenericRepositoryInterface<OvertimeType>, OvertimeTypeRepository>();

builder.Services.AddScoped<IGenericRepositoryInterface<Sanction>, SanctionRepository>();
builder.Services.AddScoped<IGenericRepositoryInterface<SanctionType>, SanctionTypeRepository>();

builder.Services.AddScoped<IGenericRepositoryInterface<Vacation>, VacationRepository>();
builder.Services.AddScoped<IGenericRepositoryInterface<VacationType>, VacationTypeRepository>();

builder.Services.AddScoped<IGenericRepositoryInterface<Doctor>, DoctorRepository>();

builder.Services.AddScoped<IGenericRepositoryInterface<Employee>, EmployeeRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowBlazor", 
        builder =>  builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader()
        );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowBlazor");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
