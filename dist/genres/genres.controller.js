"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenresController = void 0;
const common_1 = require("@nestjs/common");
const genre_schema_1 = require("../schemas/genre.schema");
const genres_service_1 = require("./genres.service");
const create_genre_dto_1 = require("./dto/create-genre.dto");
const common_2 = require("@nestjs/common");
let GenresController = class GenresController {
    constructor(genresService) {
        this.genresService = genresService;
    }
    async create(res, createGenreDto) {
        return await this.genresService.create(res, createGenreDto);
    }
    async findAll(res) {
        const genres = await this.genresService.findAll();
        res.send(genres);
    }
    async DeleteMany() {
        return this.genresService.deleteMany();
    }
    async deleteGenre(res, genreId) {
        return await this.genresService.remove(res, genreId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "findAll", null);
__decorate([
    common_1.Delete(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "DeleteMany", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_2.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "deleteGenre", null);
GenresController = __decorate([
    common_1.Controller('genres'),
    __metadata("design:paramtypes", [genres_service_1.GenresService])
], GenresController);
exports.GenresController = GenresController;
//# sourceMappingURL=genres.controller.js.map