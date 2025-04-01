import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class GetUserResponseDto {
  @ApiProperty({ example: '67eb5c19005816f6cc0b650c' })
  _id: string;

  @ApiProperty({ example: 'Jerwyn Rabor' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 28 })
  @IsNotEmpty()
  @IsNumber()
  age: number;
}

export class BadRequestUserResponseDto {
  @ApiProperty({
    example: [
      'username must be a string',
      'username should not be empty',
      'age must be a number conforming to the specified constraints',
      'age should not be empty',
    ],
  })
  message: string[];

  @ApiProperty({ example: 'Bad Request' })
  error: string;

  @ApiProperty({ example: 400 })
  statusCode: number;
}

export class NotFoundUserResponseDto {
  @ApiProperty({ example: 'User not found' })
  response: string;

  @ApiProperty({ example: 404 })
  status: number;

  @ApiProperty({ example: 'User not found' })
  message: string;

  @ApiProperty({ example: 'HttpException' })
  name: string;
}
