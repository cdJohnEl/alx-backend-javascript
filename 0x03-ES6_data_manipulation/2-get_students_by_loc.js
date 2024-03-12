export default function getListStudentLocation(list, city) {
  return list.filter((obj) => obj.location === city);
}
