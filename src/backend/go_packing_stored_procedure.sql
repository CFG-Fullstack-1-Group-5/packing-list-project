USE go_packing_1;

DELIMITER //
CREATE PROCEDURE `sp_packing_list`(IN num_days INT, IN temperature DECIMAL, IN style_found VARCHAR(200), IN activity_found VARCHAR(200), IN variants VARCHAR(20))
BEGIN 

                SELECT 
						i.item_description,
						a.activity_type,
                CASE 
						WHEN i.qty_per_week > 1 THEN CEILING(num_days / 7 * i.qty_per_week)
						ELSE 1
                END AS quantity
                FROM item AS i
                LEFT JOIN weather AS w ON
                i.weather_id = w.weather_id
                LEFT JOIN activity AS a ON
                i.activity_id = a.activity_id
                LEFT JOIN temp AS t ON
                i.temp_id = t.temp_id
                LEFT JOIN style AS s ON
                i.style_id = s.style_id
                WHERE 
    temperature >= t.low AND temperature <= t.high
    -- AND i.temp_id = 8
    AND FIND_IN_SET(a.activity_type, activity_found)
    AND find_in_set(s.style_desc, style_found)
    OR find_in_set(w.weather_condition, variants);
    
END //

DELIMITER ;