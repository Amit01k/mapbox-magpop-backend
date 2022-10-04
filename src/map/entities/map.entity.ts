import { UnprocessableEntityException } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GeoJSON } from "geojson"
import { IsOptional } from "class-validator";
import { json } from "stream/consumers";

@Entity({ name: "geodata" })
export class Map {
    @PrimaryGeneratedColumn("uuid")
    id: string

    

    @Column({ nullable: true })
    name: string

    @Column({ nullable: true })
    color: string

    @Column({ nullable: true })
    desc: string

    
    @Column({
        type: 'geometry',
        //name: 'geom',
        spatialFeatureType: 'geometry',
        srid: 4326,
        nullable: true
    })
    geom: GeoJSON;

    


}

