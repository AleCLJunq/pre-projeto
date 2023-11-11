/*
  Warnings:

  - You are about to drop the column `taskId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_taskId_fkey";

-- DropIndex
DROP INDEX "Category_taskId_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "taskId";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "categoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
