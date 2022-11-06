import ytdl from 'ytdl-core'

export default async function handler(req, res) {
  try {
    const url = req.query.url
    console.log(url)
    if (!ytdl.validateURL(url)) return res.status(400).json({ error: 'Invalid URL' })

    let title = 'audio'
    await ytdl.getBasicInfo(
      url,
      {
        format: 'mp4',
      },
      (err, info) => {
        if (err) throw err
        title = info.player_response.videoDetails.title.replace(
          /[^\x00-\x7F]/g,
          ''
        )
      }
    )

    res.setHeader('Content-Disposition', `attachment; filename="${title}.mp3"`)
    ytdl(url, {
      format: 'mp3',
      filter: 'audioonly',
    }).pipe(res)
  } catch (err) {
    console.error(err)
  }
  // res.status(200).json({ name: 'John Doe' })
}
