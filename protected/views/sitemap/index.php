<?php echo '<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <?php foreach ($items as $item): ?>
    <url>
        <loc><?php echo $host; ?><?php echo $item->getViewUrl(); ?></loc>
        <lastmod><?php echo date(DATE_W3C, strtotime($item->update_time)); ?></lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>
    <?php endforeach; ?>
</urlset>