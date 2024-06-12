using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class AddAdmin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO [dbo].[AspNetUsers] ([Id],[Discriminator] ,[UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber],[PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [FirstName], [LastName], [ImageUrl]) VALUES (N'5d4d89bf-9c66-4bbc-98d3-997356cc61c6',User, N'abdelrahmanezzat', N'ABDELRAHMANEZZAT', N'abdelrahmanezzateid@gmail.com', N'ABDELRAHMANEZZATEID@GMAIL.COM', 1, N'AQAAAAEAACcQAAAAEJwh5KchnUlM6HEYgDVsz7mUt0BcwUGRPSxZKSXqoyDW1jYkYR7+6boQmNvLUZNYkQ==', N'7HNZPZEKH2PUD44CYCPWRZFYPTKEXCWJ', N'7e77cc38-3196-4ebd-8297-4dbc091d78f7', N'01212556358', 0, 0, NULL, 1, 0, N'Abdelrahman', N'Ezzat', N'\\images\\7c404bed-6283-4851-b04b-d4b25fd13bea.jpg')");
            migrationBuilder.Sql("INSERT INTO [dbo].[AspNetUserRoles] (UserId, RoleId) SELECT '5d4d89bf-9c66-4bbc-98d3-997356cc61c6', Id FROM [dbo].[AspNetRoles]");
        }






        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM [dbo].[AspNetUserRoles] WHERE UserId = '5d4d89bf-9c66-4bbc-98d3-997356cc61c6'");
            migrationBuilder.Sql("DELETE FROM [dbo].[AspNetUsers] WHERE Id = '5d4d89bf-9c66-4bbc-98d3-997356cc61c6'");
        }


    }
}

