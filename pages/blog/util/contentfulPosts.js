const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries(slug, tags, limit) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order:'sys.createdAt',
    'fields.slug[in]': slug,
    "fields.tags[in]": tags,
    limit
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
