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
exports.ArtistsController = void 0;
const common_1 = require("@nestjs/common");
const artist_schema_1 = require("../schemas/artist.schema");
const artists_service_1 = require("./artists.service");
const create_artist_dto_1 = require("./dto/create-artist.dto");
const update_artist_dto_1 = require("./dto/update-artist.dto");
let ArtistsController = class ArtistsController {
    constructor(artistsService) {
        this.artistsService = artistsService;
    }
    async addArtist(res, createArtistDto) {
        return await this.artistsService.create(res, createArtistDto);
    }
    async findAll() {
        return await this.artistsService.findAll();
    }
    async DeleteMany(res) {
        return await this.artistsService.deleteMany(res);
    }
    async getCustomer(res, artistId) {
        return await this.artistsService.findOne(res, artistId);
    }
    async updateArtist(res, artistId, updateArtistDto) {
        const artist = await this.artistsService.update(res, artistId, updateArtistDto);
        return artist;
    }
    async deleteArtist(res, artistId) {
        return await this.artistsService.remove(res, artistId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_artist_dto_1.CreateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "addArtist", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "findAll", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "DeleteMany", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "getCustomer", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_artist_dto_1.UpdateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "updateArtist", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ArtistsController.prototype, "deleteArtist", null);
ArtistsController = __decorate([
    common_1.Controller('artists'),
    __metadata("design:paramtypes", [artists_service_1.ArtistsService])
], ArtistsController);
exports.ArtistsController = ArtistsController;
//# sourceMappingURL=artists.controller.js.map