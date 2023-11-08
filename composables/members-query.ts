export const useAllFacultyMemberQuery = () =>
  queryContent("members", "faculty");
export const useAllStaffAndPostDocQuery = () => queryContent("members", "staff-and-postdoc");
export const useAllGradStudentQuery = () =>
  queryContent("members", "grad-student");

export const useAllAlumniQuery = () => queryContent("members", "alumni");
