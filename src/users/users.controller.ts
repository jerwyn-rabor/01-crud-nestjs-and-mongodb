import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import {
  BadRequestUserResponseDto,
  GetUserResponseDto,
  NotFoundUserResponseDto,
} from './dto/get-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create new user' })
  @ApiCreatedResponse({
    description: 'User created',
    type: GetUserResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Bad payload sent',
    type: BadRequestUserResponseDto,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ type: [GetUserResponseDto] })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get user details' })
  @ApiOkResponse({ type: GetUserResponseDto })
  @ApiNotFoundResponse({
    description: 'User not found',
    type: NotFoundUserResponseDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'Update user details' })
  @ApiOkResponse({ type: GetUserResponseDto })
  @ApiNotFoundResponse({
    description: 'User not found',
    type: NotFoundUserResponseDto,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiOkResponse({ type: GetUserResponseDto })
  @ApiNotFoundResponse({
    description: 'User not found',
    type: NotFoundUserResponseDto,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
