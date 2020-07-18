# ECE331 - Datalogger

This project involves running a webserver (with lighttpd) to plot sensor data from the ece331 raspberry pi expansion board. The expansion board records temperature, IR intensity, full spectrum intensity, visible light intenstiy, illuminace, pressure and humidity.

The data was retrived through serial (ttyAMA0) on the Raspberry Pi. The python script "storedata" gets the data from serial, then stores it into a sqlite3 database (Insert how sqlite3 database set up later). It also stores the current date and time into the database. A cron job is used to run the script every minute.

"* * * * * cd /var/www/html && (path-to-script)"

The php script, "sqldata.php" takes the last 24 hours of data and encodes it into JSON format. The info is then graphed on the webserver using chart.js.The webserver always graphs the last 24 hours of data (assuming the python script is sucessful in storeing data).
