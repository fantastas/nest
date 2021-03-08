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
exports.GenresService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const create_genre_dto_1 = require("./dto/create-genre.dto");
const genre_schema_1 = require("../schemas/genre.schema");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const artist_schema_1 = require("../schemas/artist.schema");
let GenresService = class GenresService {
    constructor(genreModel, artistModel) {
        this.genreModel = genreModel;
        this.artistModel = artistModel;
    }
    async create(res, createGenreDto) {
        const createdGenre = new this.genreModel(createGenreDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Genre has been created successfully',
            createdGenre,
        });
    }
    async findAll() {
        return await this.genreModel.find().exec();
    }
    async deleteMany() {
        return this.genreModel.deleteMany().exec();
    }
    async remove(res, genreId) {
        if (!genreId) {
            throw new common_3.NotFoundException('Genre ID does not exist');
        }
        const deletedGenre = await this.genreModel.findByIdAndRemove(genreId);
        const inart = await this.artistModel.find(genreId);
        this.artistModel.remove(inart);
        if (!deletedGenre) {
            throw new common_3.NotFoundException('Genre does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Genre has been deleted',
            deletedGenre,
        });
    }
};
__decorate([
    __param(0, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", Promise)
], GenresService.prototype, "create", null);
__decorate([
    __param(0, common_2.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GenresService.prototype, "remove", null);
GenresService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(genre_schema_1.Genre.name)),
    __param(1, mongoose_1.InjectModel(artist_schema_1.Artist.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], GenresService);
exports.GenresService = GenresService;
//# sourceMappingURL=genres.service.js.map