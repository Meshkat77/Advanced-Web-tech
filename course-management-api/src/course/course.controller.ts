import { Controller, Get } from '@nestjs/common';

@Controller('course')
export class CourseController {

  @Get()
  getAllCourses() {
    return 'Course route is working';
  }

}