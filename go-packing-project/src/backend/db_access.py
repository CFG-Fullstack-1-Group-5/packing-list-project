import mysql.connector
from config import USER, PASSWORD, HOST
from list_return import style_found, temperature, activity_found, variants, num_days


# Creating our custom exception class
class DbConnectionError(Exception):
    pass

# Creating connection to database
def _connect_to_db(database_name):
    """
    Function to connect to database with parameter of db_name expected
    You can prefix a function name with an underscore (_) to make it private
    This means the function can only be used in this module
    If you attempt to call the _connect_to_db() function, you’ll get an error.
    Function to create a connection to the database using the connect method provided by mysql-connector-python
    :param database_name: 
    :return: connection object
    """
    connection = mysql.connector.connect(
        host=HOST,
        user=USER,
        password=PASSWORD,
        auth_plugin='mysql_native_password',
        database=database_name
    )
    return connection


def get_all_records():
    try:
        database_name = "go_packing_1"
        database_connection = _connect_to_db(database_name)
        cursor = database_connection.cursor()
        print(f"Connected to DB:{database_name}")
        args = [num_days, temperature, style_found, activity_found, variants]
        cursor.callproc('sp_packing_list', args)
        results = cursor.fetchall()
        clothes_list = {'clothes': [],
                        'extras': []}
        for item in cursor.stored_results():
            results = item.fetchall()
            for i,y,z in results:
                if y == 'extras':
                    clothes_list['extras'].append(i)
                elif y == 'essential':
                    clothes_list['clothes'].append(i+' x '+str(z))
                else:
                    clothes_list['clothes'].append(i+' x '+str(z))
        return clothes_list
    except Exception:
        raise DbConnectionError("Failed to read data from DB")
    finally:
        if database_connection:
            database_connection.close()
            print("Database connection is closed")

necessary_clothes = get_all_records()

if __name__ == '__main__':
    necessary_clothes