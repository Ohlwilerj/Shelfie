UPDATE inventory
SET product_name = $2,
    price = $3,
    image = $4
WHERE id = $1;