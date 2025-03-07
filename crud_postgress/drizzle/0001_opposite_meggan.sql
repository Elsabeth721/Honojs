ALTER TABLE "items" ALTER COLUMN "name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "items" ADD COLUMN "email" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "items" ADD CONSTRAINT "items_email_unique" UNIQUE("email");