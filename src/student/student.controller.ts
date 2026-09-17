import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('student')
export class StudentController {

  // CREATE
  @Post()
  createStudent(@Body() student: any) {
    return {
      message: 'Student created successfully',
      student,
    };
  }

  // READ ALL
  @Get()
  getAllStudents() {
    return {
      message: 'All students',
    };
  }

  // READ ONE
  @Get(':id')
  getStudent(@Param('id') id: string) {
    return {
      message: 'Student found',
      id,
    };
  }

  // UPDATE
  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() student: any,
  ) {
    return {
      message: 'Student updated successfully',
      id,
      student,
    };
  }

  // DELETE
  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return {
      message: 'Student deleted successfully',
      id,
    };
  }
}