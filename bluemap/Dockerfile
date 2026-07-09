FROM php:8.2-apache

# PDO-Treiber für MySQL und PostgreSQL installieren
RUN apt-get update \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo_pgsql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# mod_rewrite aktivieren (wird für das Routing auf sql.php gebraucht)
RUN a2enmod rewrite

# Apache erlauben, .htaccess Overrides zu nutzen
RUN sed -ri 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf

# App-Dateien kopieren
COPY . /var/www/html/

# Rechte setzen
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
