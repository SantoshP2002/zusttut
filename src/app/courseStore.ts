import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Course {
  id: number;
  title: string;
  completed: boolean;
}

interface CourseStore {
  courses: Course[];
  addCourse: (course: Course) => void;
  removeCourses: (courseId: number) => void;
  toggleCourseStatus: (courseId: number) => void;
}

const courseStores = (set: any) => ({
  courses: [],

  addCourse: (course: Course) => {
    set((state: CourseStore) => ({
      courses: [course, ...state.courses],
    }));
  },

  removeCourses: (courseId: number) => {
    set((state: CourseStore) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },

  toggleCourseStatus: (courseId: number) => {
    set((state: CourseStore) => ({
      courses: state.courses.map((c) =>
        c.id === courseId ? { ...c, completed: !c.completed } : c
      ),
    }));
  },
});

const useCourseStore = create(
  devtools(
    persist<CourseStore>(courseStores, {
      name: "course-store",
    })
  )
);

export default useCourseStore;
