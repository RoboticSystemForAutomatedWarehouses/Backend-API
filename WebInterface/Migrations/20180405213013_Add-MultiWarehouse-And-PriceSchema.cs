using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebInterface.Migrations
{
    public partial class AddMultiWarehouseAndPriceSchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Configs_ConfigId",
                table: "Orders");

            migrationBuilder.DropTable(
                name: "Configs");

            migrationBuilder.DropIndex(
                name: "IX_Orders_ConfigId",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "ConfigId",
                table: "Orders");

            migrationBuilder.AddColumn<int>(
                name: "PriceSchemaId",
                table: "Spaces",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WarehouseId",
                table: "Spaces",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Prices",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BaseCost = table.Column<double>(nullable: false),
                    DailyRate = table.Column<double>(nullable: false),
                    TaxPercent = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prices", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Delivered = table.Column<bool>(nullable: false),
                    Done = table.Column<bool>(nullable: false),
                    IsOut = table.Column<bool>(nullable: false),
                    ItemId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tasks_Items_ItemId",
                        column: x => x.ItemId,
                        principalTable: "Items",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Warehouses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MaxX = table.Column<int>(nullable: false),
                    MaxY = table.Column<int>(nullable: false),
                    MaxZ = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    PriceSchemaId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Warehouses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Warehouses_Prices_PriceSchemaId",
                        column: x => x.PriceSchemaId,
                        principalTable: "Prices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Spaces_PriceSchemaId",
                table: "Spaces",
                column: "PriceSchemaId");

            migrationBuilder.CreateIndex(
                name: "IX_Spaces_WarehouseId",
                table: "Spaces",
                column: "WarehouseId");

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_ItemId",
                table: "Tasks",
                column: "ItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Warehouses_PriceSchemaId",
                table: "Warehouses",
                column: "PriceSchemaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Spaces_Prices_PriceSchemaId",
                table: "Spaces",
                column: "PriceSchemaId",
                principalTable: "Prices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Spaces_Warehouses_WarehouseId",
                table: "Spaces",
                column: "WarehouseId",
                principalTable: "Warehouses",
                principalColumn: "Id",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Spaces_Prices_PriceSchemaId",
                table: "Spaces");

            migrationBuilder.DropForeignKey(
                name: "FK_Spaces_Warehouses_WarehouseId",
                table: "Spaces");

            migrationBuilder.DropTable(
                name: "Tasks");

            migrationBuilder.DropTable(
                name: "Warehouses");

            migrationBuilder.DropTable(
                name: "Prices");

            migrationBuilder.DropIndex(
                name: "IX_Spaces_PriceSchemaId",
                table: "Spaces");

            migrationBuilder.DropIndex(
                name: "IX_Spaces_WarehouseId",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "PriceSchemaId",
                table: "Spaces");

            migrationBuilder.DropColumn(
                name: "WarehouseId",
                table: "Spaces");

            migrationBuilder.AddColumn<int>(
                name: "ConfigId",
                table: "Orders",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Configs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BaseCost = table.Column<double>(nullable: false),
                    DailyRate = table.Column<double>(nullable: false),
                    MaxX = table.Column<int>(nullable: false),
                    MaxY = table.Column<int>(nullable: false),
                    MaxZ = table.Column<int>(nullable: false),
                    TaxPercent = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Configs", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ConfigId",
                table: "Orders",
                column: "ConfigId");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Configs_ConfigId",
                table: "Orders",
                column: "ConfigId",
                principalTable: "Configs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
