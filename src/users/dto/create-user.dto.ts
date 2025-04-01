import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Jerwyn Rabor' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 28 })
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
