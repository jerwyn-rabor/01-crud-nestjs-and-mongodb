import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'Jerwyn Rabor' })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiProperty({ example: 28 })
  @IsOptional()
  @IsNumber()
  age?: number;
}
