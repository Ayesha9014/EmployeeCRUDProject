using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ServerLibrary.Migrations
{
    /// <inheritdoc />
    public partial class NewCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "countries",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Bangladesh" },
                    { 2, "India" },
                    { 3, "Canada" },
                    { 4, "Nepal" },
                    { 5, "UAE" }
                });

            migrationBuilder.InsertData(
                table: "generalDepartments",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "IT" },
                    { 2, "Medicine" },
                    { 3, "Baby Products" }
                });

            migrationBuilder.InsertData(
                table: "citys",
                columns: new[] { "Id", "CountryId", "Name" },
                values: new object[,]
                {
                    { 1, 1, "Dhaka" },
                    { 2, 1, "Chittagong" },
                    { 3, 1, "Sylhet" },
                    { 4, 1, "Khulna" },
                    { 5, 2, "New Delhi" },
                    { 6, 2, "Mumbai" },
                    { 7, 3, "Toronto" },
                    { 8, 3, "Hamilton" },
                    { 9, 3, "Montreal" },
                    { 10, 4, "Kathmandu" },
                    { 11, 4, "Lalitpur" },
                    { 12, 4, "Dharan" },
                    { 13, 5, "Dubai" },
                    { 14, 5, "Abu Dhabi" },
                    { 15, 5, "Sharjah" }
                });

            migrationBuilder.InsertData(
                table: "departments",
                columns: new[] { "Id", "GeneralDepartmentId", "Name" },
                values: new object[,]
                {
                    { 1, 1, "SQL Server Management" },
                    { 2, 1, "Angular" },
                    { 3, 1, "MAUI" },
                    { 4, 2, "Research & Development" },
                    { 5, 2, "Quality Assurance" },
                    { 6, 2, "Production" },
                    { 7, 3, "Storage" },
                    { 8, 3, "Food" },
                    { 9, 3, "Skin Care" }
                });

            migrationBuilder.InsertData(
                table: "branches",
                columns: new[] { "Id", "DepartmentId", "Name" },
                values: new object[,]
                {
                    { 1, 1, "Branch-I" },
                    { 2, 2, "Branch-I" },
                    { 3, 3, "Branch-I" },
                    { 4, 4, "Branch-I" },
                    { 5, 5, "Branch-I" },
                    { 6, 6, "Branch-I" },
                    { 7, 4, "Branch-II" },
                    { 8, 5, "Branch-II" },
                    { 9, 6, "Branch-II" },
                    { 10, 7, "Branch-II" },
                    { 11, 8, "Branch-II" },
                    { 12, 9, "Branch-II" },
                    { 13, 5, "Branch-III" },
                    { 14, 6, "Branch-III" },
                    { 15, 7, "Branch-III" },
                    { 16, 8, "Branch-III" },
                    { 17, 9, "Branch-III" }
                });

            migrationBuilder.InsertData(
                table: "towns",
                columns: new[] { "Id", "CityId", "Name" },
                values: new object[,]
                {
                    { 1, 1, "Mirpur" },
                    { 2, 1, "Banani" },
                    { 3, 2, "Cox's Bazar" },
                    { 4, 3, "AramBag" },
                    { 5, 4, "Farazipara" },
                    { 6, 5, "Mahipalpur" },
                    { 7, 6, "Andheri" },
                    { 8, 7, "North York" },
                    { 9, 8, "Flamborough" },
                    { 10, 9, "Villeray" },
                    { 11, 10, "Maharajgunj" },
                    { 12, 11, "Sanepa" },
                    { 13, 12, "Panbari" },
                    { 14, 13, "Al Quoz" },
                    { 15, 14, "Al Mushrif" },
                    { 16, 14, "Mafraq Industrial Area" },
                    { 17, 15, "Hay Al Atain" }
                });

            migrationBuilder.InsertData(
                table: "employees",
                columns: new[] { "Id", "Address", "BranchId", "CivilId", "FileNumber", "JobName", "Name", "Other", "Photo", "TelephoneNumber", "TownId" },
                values: new object[,]
                {
                    { 1, "Sylhet, Bangaladesh", 1, "782346827", "121265", "Software Developer", "Rahim Miah", "", "employee.png", "893479321", 1 },
                    { 2, "Shewrapara ,Dhaka, Bangaladesh", 2, "8934792187", "121264", "Software Developer", "Karim", "", "employee.png", "1984739287", 2 },
                    { 3, "Sylhet, Bangaladesh", 3, "19834792", "121263", "Software Developer", "Ratul", "", "employee.png", "984312487432", 3 },
                    { 4, "Shewrapara ,Dhaka, Bangaladesh", 4, "93847913289", "121262", "Manager", "Mohib", "", "employee.png", "8957981237498", 4 },
                    { 5, "Sylhet, Bangaladesh", 5, "18973498127", "121261", "Manager", "Osman", "", "employee.png", "98475931279348", 5 },
                    { 6, "Sylhet, Bangaladesh", 6, "187349178", "121260", "Manager", "Ayesha", "", "employee.png", "89317498321794", 6 },
                    { 7, "Shewrapara ,Dhaka, Bangaladesh", 7, "33895443", "121259", "Manager", "Azad", "", "employee.png", "893427493217", 7 },
                    { 8, "Shewrapara ,Dhaka, Bangaladesh", 8, "39827981279", "121258", "Manager", "Siddika", "", "employee.png", "983479138274", 8 },
                    { 9, "Sylhet, Bangaladesh", 9, "8437912834", "121257", "Manager", "Farjana", "", "employee.png", "89715873749", 9 },
                    { 10, "Sylhet, Bangaladesh", 10, "891234798", "121256", "Manager", "Yeasmin", "", "employee.png", "9482713718", 10 },
                    { 11, "Shewrapara ,Dhaka, Bangaladesh", 11, "8349718324", "121255", "Operator", "Raju", "", "employee.png", "8513497493", 11 },
                    { 12, "Sylhet, Bangaladesh", 12, "1893247982", "121254", "Operator", "Akib", "", "employee.png", "9435712837498", 12 },
                    { 13, "Sylhet, Bangaladesh", 13, "348917283947", "121253", "Worker", "Rahid", "", "employee.png", "8579938479", 13 },
                    { 14, "Shewrapara ,Dhaka, Bangaladesh", 14, "54389727", "121252", "Worker", "Musarraf", "", "employee.png", "0189734857913", 14 },
                    { 15, "Sylhet, Bangaladesh", 15, "892347113", "121251", "Worker", "Mehedi", "", "employee.png", "891749181990", 1 },
                    { 16, "Sylhet, Bangaladesh", 16, "4378346872", "121250", "Worker", "Mitu", "", "employee.png", "847391237879`", 11 },
                    { 17, "Shewrapara ,Dhaka, Bangaladesh", 17, "8493217981", "121249", "Manager", "Moon", "", "employee.png", "197493879238", 12 },
                    { 18, "Sylhet, Bangaladesh", 1, "9812473928", "121248", "Software Developer", "Tuli", "", "employee.png", "78914379821", 13 },
                    { 19, "Sylhet, Bangaladesh", 1, "8971239487", "121247", "Software Developer", "Tasrif", "", "employee.png", "98734918391", 14 },
                    { 20, "Shewrapara ,Dhaka, Bangaladesh", 2, "483729753", "121246", "Software Developer", "Nahid", "", "employee.png", "18473978127", 10 },
                    { 21, "Sylhet, Bangaladesh", 2, "891738429", "121245", "Software Developer", "Kamrul", "", "employee.png", "198723492817", 9 },
                    { 22, "Sylhet, Bangaladesh", 2, "7891349283", "121244", "Software Developer", "Azim", "", "employee.png", "891734972832", 6 },
                    { 23, "Shewrapara ,Dhaka, Bangaladesh", 2, "984237834", "121210", "Software Developer", "Tushar", "", "employee.png", "19874392187948", 4 },
                    { 24, "Sylhet, Bangaladesh", 2, "3642431234", "121211", "Software Developer", "Lamiya", "", "employee.png", "893127498172", 6 },
                    { 25, "Shewrapara ,Dhaka, Bangaladesh", 1, "25412413421", "121212", "Software Developer", "Rakib", "", "employee.png", "1987438927198", 2 },
                    { 26, "Sylhet, Bangaladesh", 4, "2541234123", "121213", "Worker", "Yeasin", "", "employee.png", "9148379128", 9 },
                    { 27, "Shewrapara ,Dhaka, Bangaladesh", 4, "2451234234", "121214", "Operator", "Faruk", "", "employee.png", "3874981278", 10 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "employees",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "branches",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "towns",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "citys",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "countries",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "countries",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "countries",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "countries",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "countries",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "generalDepartments",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "generalDepartments",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "generalDepartments",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
