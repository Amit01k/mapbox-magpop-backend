import { UnprocessableEntityException } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GeoJSON } from "geojson"
import { IsOptional } from "class-validator";

@Entity({ name: "geodata" })
export class Map {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    type: string;

    @Column({ nullable: true })
    name: string

    @Column({
        type: 'geometry',
        //name: 'geom',
        spatialFeatureType: 'geometry',
        srid: 4326,
        nullable: true
    })
    geometry: GeoJSON;

    // @IsOptional()
    // geometry?: number[][];


}

