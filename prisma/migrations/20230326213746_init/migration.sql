-- CreateTable
CREATE TABLE "FlashCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "linkedlnUrl" TEXT,
    "gitHubUrl" TEXT,
    "createAt" DATETIME NOT NULL,
    "updateAt" DATETIME NOT NULL
);
