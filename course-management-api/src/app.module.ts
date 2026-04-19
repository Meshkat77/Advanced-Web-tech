import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';

@Module({
  imports: [CourseModule], // ✅ MUST be here
})
export class AppModule {}