"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const artists_controller_1 = require("./artists.controller");
const artists_service_1 = require("./artists.service");
const artist_schema_1 = require("../schemas/artist.schema");
let ArtistModule = class ArtistModule {
};
ArtistModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: artist_schema_1.Artist.name, schema: artist_schema_1.ArtistSchema }]),
        ],
        controllers: [artists_controller_1.ArtistsController],
        providers: [artists_service_1.ArtistsService],
        exports: [artists_service_1.ArtistsService],
    })
], ArtistModule);
exports.ArtistModule = ArtistModule;
//# sourceMappingURL=artists.module.js.map