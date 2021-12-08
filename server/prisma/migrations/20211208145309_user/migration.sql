-- CreateTable
CREATE TABLE "Test" (
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "idGitHub" INTEGER NOT NULL,
    "login" TEXT NOT NULL,
    "node_id" TEXT NOT NULL,
    "avatar_url" TEXT,
    "gravatar_id" TEXT,
    "url" TEXT,
    "html_url" TEXT,
    "followers_url" TEXT,
    "following_url" TEXT,
    "gists_url" TEXT,
    "starred_url" TEXT,
    "subscriptions_url" TEXT,
    "organizations_url" TEXT,
    "repos_url" TEXT,
    "events_url" TEXT,
    "received_events_url" TEXT,
    "type" TEXT,
    "site_admin" BOOLEAN,
    "name" TEXT,
    "company" TEXT,
    "blog" TEXT NOT NULL,
    "location" TEXT,
    "email" TEXT,
    "bio" TEXT,
    "twitter_username" TEXT,
    "public_repos" INTEGER,
    "public_gists" INTEGER,
    "followers" INTEGER,
    "following" INTEGER,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),
    "hireable" BOOLEAN,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_nom_key" ON "Test"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Test_prenom_key" ON "Test"("prenom");

-- CreateIndex
CREATE UNIQUE INDEX "User_idGitHub_key" ON "User"("idGitHub");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");
