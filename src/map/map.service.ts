import { Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Map } from './entities/map.entity'
import { Repository } from 'typeorm';

@Injectable()
export class MapService {
  constructor(@InjectRepository(Map) private readonly map: Repository<Map>) { }




  async createParcel(createParcelPointDto: Map): Promise<any> {
    // const data = {
    //   // type: 'geometry',
    //   coordinates: [createParcelPointDto.geometry],
    //   name: createParcelPointDto.name
    // }
    // console.log(data)


    const map = this.map.create(createParcelPointDto)
    //  const map = this.map.create({ name: createParcelPointDto.name, data })
    // console.log(map)
    await this.map.save(map)
    // return map
  }



  create(createMapDto: CreateMapDto) {
    return 'This action adds a new map';
  }

  findAll() {
    return this.map.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} map`;
  }

  update(id: number, updateMapDto: UpdateMapDto) {
    return `This action updates a #${id} map`;
  }

  remove(id: number) {
    return `This action removes a #${id} map`;
  }
}
