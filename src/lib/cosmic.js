import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY
})

const props = `{
  slug
  title
  metadata {
    hero,
    experience,
    projects
  }
}`

export async function getDataBySlug(slug) {
  const data = await cosmic.objects
    .findOne({
      type: 'portfolio',
      slug
    })
    .props('title,slug,metadata,created_at')
    .depth(2)
    .options({
      media: {
        props: 'alt_text,width,height'
      },
    })
  return data.object
}


export async function getProjects(){
  const data = await cosmic.objects.find({
    type: "projects",
  }).props("slug,title,metadata,type")
  .depth(1)
  .options({
    media: {
      props: 'alt_text,width,height'
    },
  })
  return data.objects
}
