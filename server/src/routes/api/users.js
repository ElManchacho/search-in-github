import { Router } from "express";
import { variables } from '../../../variables.json'
import { PrismaClient } from '@prisma/client'
require('isomorphic-fetch');


const api = Router();

const prisma = new PrismaClient();

async function fetchUser(username) {

  const response = await fetch(`${variables.GITHUB_URL}${username}`)

  return await response.json();
}

api.get("/:username", async (request, response) => {

  const { username } = request.params;

  const specificUser = await prisma.user.findUnique({
    where:{
      login:username.toLowerCase(),
    }
  })

  if(!specificUser)
  {
    const body = await fetchUser(username);
    body.login = body.login.toLowerCase();
    await prisma.user.create({
      data: {
        idGitHub:body.id,
        login: body.login,
        node_id: body.node_id,
        avatar_url: body.avatar_url,
        gravatar_id:body.gravatar_id,
        url:body.url,
        html_url: body.html_url,
        followers_url:body.followers_url,
        following_url:body.followers_url,
        gists_url:body.gists_url,
        starred_url:body.starred_url,
        subscriptions_url:body.subscriptions_url,
        organizations_url:body.organizations_url,
        repos_url:body.repos_url,
        events_url:body.events_url,
        received_events_url:body.received_events_url,
        type:body.type,
        site_admin:body.site_admin,
        name:body.name,
        company : body.company,
        blog: body.blog,
        location: body.location,
        email: body.email,
        bio : body.bio,
        twitter_username: body.twitter_username,
        public_repos: body.public_repos,
        public_gists: body.public_gists,
        followers: body.followers,
        following: body.following,
        created_at: body.created_at,
        updated_at: body.updated_at,
        hireable: body.hireable
      }
    })

    const userInserted = await prisma.user.findUnique({
      where:{
        login:username,
      }
    })
  
    response.json({
      user:userInserted
    })

  }
  else{
  
    response.json({
      user:specificUser
    })
  }


});

export default api;
