BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Users" (
	"id"	INTEGER,
	"role"	TEXT DEFAULT 'student',
	"firstName"	VARCHAR(255),
	"lastName"	VARCHAR(255),
	"title"	VARCHAR(255),
	"dob"	VARCHAR(255),
	"email"	VARCHAR(255),
	"password"	VARCHAR(255),
	"country"	VARCHAR(255),
	"avatar"	VARCHAR(255),
	"mobile"	VARCHAR(255),
	"bio"	TEXT,
	"isActive"	TINYINT(1) DEFAULT 1,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Categories" (
	"id"	INTEGER,
	"name"	VARCHAR(255),
	"headline"	VARCHAR(255),
	"image"	VARCHAR(255),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "SubCategories" (
	"id"	INTEGER,
	"title"	VARCHAR(255),
	"headline"	VARCHAR(255),
	"parentId"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("parentId") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "Courses" (
	"id"	INTEGER,
	"type"	TEXT DEFAULT 'recorded',
	"title"	VARCHAR(255),
	"headline"	VARCHAR(255),
	"description"	TEXT,
	"image"	VARCHAR(255),
	"introVideo"	VARCHAR(255),
	"startingDate"	DATETIME,
	"endingDate"	DATETIME,
	"price"	NUMBER,
	"teacherId"	INTEGER,
	"subcategoryId"	INTEGER,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("teacherId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE CASCADE,
	FOREIGN KEY("subcategoryId") REFERENCES "SubCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "Sections" (
	"id"	INTEGER,
	"order"	SMALLINT,
	"title"	VARCHAR(255),
	"headline"	VARCHAR(255),
	"courseId"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("courseId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "Quizzes" (
	"id"	INTEGER,
	"title"	VARCHAR(255),
	"startingDate"	DATETIME,
	"endingDate"	DATETIME,
	"minScoreToPass"	DECIMAL,
	"isLocked"	TINYINT(1),
	"sectionId"	INTEGER,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	FOREIGN KEY("sectionId") REFERENCES "Sections"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Questions" (
	"id"	INTEGER,
	"statement"	TEXT,
	"hint"	VARCHAR(255),
	"points"	INTEGER,
	"quizId"	INTEGER,
	FOREIGN KEY("quizId") REFERENCES "Quizzes"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Options" (
	"id"	INTEGER,
	"statement"	TEXT,
	"isCorrect"	TINYINT(1) DEFAULT 0,
	"questionId"	INTEGER,
	FOREIGN KEY("questionId") REFERENCES "Questions"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Lectures" (
	"id"	INTEGER,
	"type"	TEXT DEFAULT 'article',
	"title"	VARCHAR(255),
	"startingDate"	DATETIME,
	"endingDate"	DATETIME,
	"article"	TEXT,
	"isLocked"	TINYINT(1) DEFAULT 1,
	"streamLink"	VARCHAR(255),
	"videoLink"	VARCHAR(255),
	"conferenceId"	VARCHAR(255),
	"sectionId"	INTEGER,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	FOREIGN KEY("sectionId") REFERENCES "Sections"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "Attendances" (
	"studentId"	INTEGER NOT NULL,
	"lectureId"	INTEGER NOT NULL,
	"enrollmentId"	INTEGER,
	"quizId"	INTEGER,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	UNIQUE("studentId","quizId"),
	FOREIGN KEY("studentId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY("lectureId") REFERENCES "Lectures"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY("quizId") REFERENCES "Quizzes"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("studentId","lectureId")
);
CREATE TABLE IF NOT EXISTS "Answers" (
	"id"	INTEGER,
	"studentId"	INTEGER,
	"questionId"	INTEGER,
	"choosedOptionEntityId"	INTEGER,
	"attendanceId"	INTEGER,
	"answer"	VARCHAR(255),
	FOREIGN KEY("attendanceId") REFERENCES "Attendances"("id") ON DELETE NO ACTION ON UPDATE CASCADE,
	FOREIGN KEY("choosedOptionEntityId") REFERENCES "Options"("id") ON DELETE NO ACTION ON UPDATE CASCADE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "WishlistItems" (
	"userId"	INTEGER NOT NULL,
	"courseId"	INTEGER NOT NULL,
	FOREIGN KEY("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY("courseId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("userId","courseId")
);
CREATE TABLE IF NOT EXISTS "CartItems" (
	"userId"	INTEGER NOT NULL,
	"courseId"	INTEGER NOT NULL,
	FOREIGN KEY("courseId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("userId","courseId")
);
CREATE TABLE IF NOT EXISTS "Enrollments" (
	"passed"	TINYINT(1) DEFAULT 0,
	"studentId"	INTEGER NOT NULL,
	"courseId"	INTEGER NOT NULL,
	"createdAt"	DATETIME NOT NULL,
	"updatedAt"	DATETIME NOT NULL,
	UNIQUE("studentId","courseId"),
	FOREIGN KEY("courseId") REFERENCES "Courses"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY("studentId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("studentId","courseId")
);
COMMIT;
