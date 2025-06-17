#!/usr/bin/env bash
echo "Running composer"
composer install --no-dev --working-dir=/var/www/html

echo "Installing npm packages..."
npm ci --prefix /var/www/html

echo "Building assets..."
npm run build --prefix /var/www/html

echo "Generating app key..."
php artisan key:generate --no-interaction

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force

echo "Starting supervisord..."
/usr/bin/supervisord -c /etc/supervisord.conf
