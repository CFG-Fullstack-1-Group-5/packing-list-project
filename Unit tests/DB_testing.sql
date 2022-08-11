USE go_packing_1;

-- using the select * query for each table to ensure its properly populated with data

SELECT * FROM items;-- activity, style, temp, weather 

-- using the following select statements to test the data base returns items for each activity, 
-- this test was also conducted for each column and each table to test data consistency 

SELECT * FROM item WHERE activity_id = 1;
SELECT * FROM item WHERE activity_id = 2;
SELECT * FROM item WHERE activity_id = 3;
SELECT * FROM item WHERE activity_id = 4;
SELECT * FROM item WHERE activity_id = 5;
SELECT * FROM item WHERE activity_id = 6;
SELECT * FROM item WHERE activity_id = 7;
SELECT * FROM item WHERE activity_id = 8;

-- queries to check items are correct in each weather condition and activity

-- Snow 
SELECT * FROM item WHERE weather_id = 2 AND activity_id = 8 AND style_id = 3;

-- Rain
SELECT * FROM item WHERE weather_id = 1 AND activity_id = 8 AND style_id = 3;

-- testing before creating the stored procedure to ensure all variables are returned

SET @num_days = 8;
SET @temperature = 18.8;
SET @style_found = 'masculine,unisex';
SET @activity_found = 'essential,extras,formalwear';
SET @variant = 'rain';
               
               SELECT 
						item_description
						,style_desc
						,weather_condition
						,activity_type
						,low AS temp_low
						,high
                ,CASE 
						WHEN i.qty_per_week > 1 THEN CEILING(@num_days / 7 * i.qty_per_week)
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
                WHERE @temperature >= t.low 
                AND @temperature <= t.high
				AND FIND_IN_SET(a.activity_type, @activity_found)
				AND find_in_set(s.style_desc, @style_found)
				OR find_in_set(w.weather_condition, @variants);

-- testing the stored procedure after creation by calling it using different variables. (num of days, temp, style, activity, weather)

call go_packing_1.sp_packing_list(7, 25.0, 'masculine,unisex,feminine', 'activewear,general', 'rain,clear,snow');