window.SIDEBAR_ITEMS = {"mod":[["acceptor","Acceptor class handles the acceptance of inbound socket connections. It’s used to start listening on a local socket address, to accept incoming connections and to handle network errors."],["channel","Async channel that handles the sending of messages across the network. Public interface is used to create new channels, to stop and start a channel, and to send messages."],["connector","Handles the creation of outbound connections. Used to establish an outbound connection."],["constants","Network constants for various validations."],["hosts","Hosts are a list of network addresses used when establishing an outbound connection. Hosts are shared across the network through the address protocol. When attempting to connect, a node will loop through addresses in the host store until it finds ones to connect to."],["message","Defines how to decode generic messages as well as implementing the common network messages that are sent between nodes as described by the Protocol submodule."],["message_subscriber","Generic publish/subscribe class that can dispatch any kind of message to a subscribed list of dispatchers. Dispatchers subscribe to a single message format of any type. This is a generalized version of the simple publish-subscribe class in system::Subscriber."],["p2p","P2P provides all core functionality to interact with the peer-to-peer network."],["protocol","Defines the networking protocol used at each stage in a connection. Consists of a series of messages that are sent across the network at the different connection stages."],["session","Defines the interaction between nodes during a connection. Consists of an inbound session, which describes how to set up an incoming connection, and an outbound session, which describes setting up an outbound connection. Also describes the seed session, which is the type of connection used when a node connects to the network for the first time. Implements the session trait which describes the common functions across all sessions."],["settings","Network configuration settings."],["transport","Network transport implementations."]]};