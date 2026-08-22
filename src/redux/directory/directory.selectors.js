// `createSelector`: دالة من مكتبة `reselect` لإنشاء محددات محسّنة لحالة `Redux`.
import { createSelector } from 'reselect';

// `selectDirectory`: يختار فرع `directory` من كائن حالة `Redux` الكامل.
const selectDirectory = state => state.directory;

// `selectDirectorySections`: يعيد قائمة الأقسام المستخدمة لإنشاء قائمة الدليل.
// يعيد `createSelector` استخدام النتيجة السابقة إلى أن تتغير حالة `directory`.
export const selectDirectorySections = createSelector(
  // مصدر البيانات: يمرّر ناتج `selectDirectory` إلى دالة النتيجة التالية.
  [selectDirectory],
  // دالة النتيجة: تستخرج مصفوفة `sections` فقط من حالة `directory` المحددة.
  (directory) => directory.sections
);