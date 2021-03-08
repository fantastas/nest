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
exports.ArtistsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const create_artist_dto_1 = require("./dto/create-artist.dto");
const artist_schema_1 = require("../schemas/artist.schema");
const update_artist_dto_1 = require("./dto/update-artist.dto");
const genre_schema_1 = require("../schemas/genre.schema");
let ArtistsService = class ArtistsService {
    constructor(artistModel) {
        this.artistModel = artistModel;
    }
    async create(res, createArtistDto) {
        const createdArtist = new this.artistModel(createArtistDto);
        const isCreated = this.artistModel.findOne({ name: createdArtist.name });
        if (isCreated) {
            createdArtist.save();
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Artist has been created successfully',
                createdArtist,
            });
        }
        else {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Artist was not created!',
                status: 400,
            });
        }
    }
    async findAll() {
        return this.artistModel.find().exec();
    }
    async deleteMany(res) {
        this.artistModel.deleteMany().exec();
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Artists have been created successfully',
        });
    }
    async findOne(res, artistId) {
        const artist = await this.artistModel.findById({ _id: artistId }).exec();
        if (!artist) {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json(`ID: ${artistId} doesn't exist.`);
        }
        return res.status(common_1.HttpStatus.OK).json(artist);
    }
    async update(res, artistId, updateArtistDto) {
        try {
            const existingArtist = await this.artistModel.findByIdAndUpdate({ _id: artistId }, updateArtistDto);
            existingArtist.save();
            if (!existingArtist) {
                throw new common_1.NotFoundException('Artist does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Artist has been successfully updated',
                existingArtist,
            });
        }
        catch (err) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error: Artist not updated!',
                status: 400,
            });
        }
    }
    async remove(res, artistId) {
        if (!artistId) {
            throw new common_1.NotFoundException('Artist ID does not exist');
        }
        const deletedArtist = await this.artistModel.findByIdAndRemove(artistId);
        if (!deletedArtist) {
            throw new common_1.NotFoundException('Artist does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Artist has been deleted',
            deletedArtist,
        });
    }
    async find(res, genreId) {
        await this.artistModel.find({ genre: genreId });
    }
};
__decorate([
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_artist_dto_1.CreateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistsService.prototype, "create", null);
__decorate([
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArtistsService.prototype, "deleteMany", null);
__decorate([
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ArtistsService.prototype, "findOne", null);
__decorate([
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_artist_dto_1.UpdateArtistDto]),
    __metadata("design:returntype", Promise)
], ArtistsService.prototype, "update", null);
__decorate([
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ArtistsService.prototype, "remove", null);
__decorate([
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, genre_schema_1.Genre]),
    __metadata("design:returntype", Promise)
], ArtistsService.prototype, "find", null);
ArtistsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(artist_schema_1.Artist.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArtistsService);
exports.ArtistsService = ArtistsService;
//# sourceMappingURL=artists.service.js.map