import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';  // ✅ ADD THIS
import { CourseService } from './course.service';        // ✅ ADD THIS

@Module({
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}