sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 9000 -j ACCEPT

#open livereload port
sudo /sbin/iptables -I INPUT -p tcp -m tcp --dport 35729 -j ACCEPT

sudo /sbin/iptables -L