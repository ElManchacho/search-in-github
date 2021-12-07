-- CreateTable
CREATE TABLE "Test" (
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "node_id" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "gravatar_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "html_url" TEXT NOT NULL,
    "followers_url" TEXT NOT NULL,
    "following_url" TEXT NOT NULL,
    "gists_url" TEXT NOT NULL,
    "starred_url" TEXT NOT NULL,
    "subscriptions_url" TEXT NOT NULL,
    "organizations_url" TEXT NOT NULL,
    "repos_url" TEXT NOT NULL,
    "events_url" TEXT NOT NULL,
    "received_events_url" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "site_admin" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "blog" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "twitter_username" TEXT NOT NULL,
    "public_repos" INTEGER NOT NULL,
    "public_gists" INTEGER NOT NULL,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_nom_key" ON "Test"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Test_prenom_key" ON "Test"("prenom");

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");
