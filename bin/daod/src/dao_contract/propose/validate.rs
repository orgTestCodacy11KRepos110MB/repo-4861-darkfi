use crate::{
    dao_contract::{DaoBulla, State},
    demo::{CallDataBase, StateRegistry, Transaction},
};
use darkfi::crypto::types::DrkCircuitField;
use std::any::{Any, TypeId};

#[derive(Debug, Clone, thiserror::Error)]
pub enum Error {
    #[error("Malformed packet")]
    MalformedPacket,
}
type Result<T> = std::result::Result<T, Error>;

pub struct CallData {}

impl CallDataBase for CallData {
    fn zk_public_values(&self) -> Vec<Vec<DrkCircuitField>> {
        vec![]
    }

    fn zk_proof_addrs(&self) -> Vec<String> {
        vec![]
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}

pub fn state_transition(
    states: &StateRegistry,
    func_call_index: usize,
    parent_tx: &Transaction,
) -> Result<Update> {
    Ok(Update {})
}

pub struct Update {}

pub fn apply(states: &mut StateRegistry, update: Update) {
    let state = states.lookup_mut::<State>(&"DAO".to_string()).unwrap();
}
