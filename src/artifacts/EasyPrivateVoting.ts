
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  type AbiType,
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  decodeFromAbi,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  L1EventPayload,
  loadContractArtifact,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  PublicKeys,
  type UnencryptedL2Log,
  type Wallet,
  type WrappedFieldLike,
} from '@aztec/aztec.js';
import EasyPrivateVotingContractArtifactJson from '../../target/private_voting-EasyPrivateVoting.json' assert { type: 'json' };
export const EasyPrivateVotingContractArtifact = loadContractArtifact(EasyPrivateVotingContractArtifactJson as NoirCompiledContract);



/**
 * Type-safe interface for contract EasyPrivateVoting;
 */
export class EasyPrivateVotingContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, EasyPrivateVotingContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, EasyPrivateVotingContract.artifact, wallet) as Promise<EasyPrivateVotingContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, admin: AztecAddressLike) {
    return new DeployMethod<EasyPrivateVotingContract>(PublicKeys.default(), wallet, EasyPrivateVotingContractArtifact, EasyPrivateVotingContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeys(publicKeys: PublicKeys, wallet: Wallet, admin: AztecAddressLike) {
    return new DeployMethod<EasyPrivateVotingContract>(publicKeys, wallet, EasyPrivateVotingContractArtifact, EasyPrivateVotingContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof EasyPrivateVotingContract['methods']>(
    opts: { publicKeys?: PublicKeys; method?: M; wallet: Wallet },
    ...args: Parameters<EasyPrivateVotingContract['methods'][M]>
  ) {
    return new DeployMethod<EasyPrivateVotingContract>(
      opts.publicKeys ?? PublicKeys.default(),
      opts.wallet,
      EasyPrivateVotingContractArtifact,
      EasyPrivateVotingContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return EasyPrivateVotingContractArtifact;
  }
  

  public static get storage(): ContractStorageLayout<'admin' | 'tally' | 'vote_ended' | 'active_at_block'> {
      return {
        admin: {
      slot: new Fr(1n),
    },
tally: {
      slot: new Fr(2n),
    },
vote_ended: {
      slot: new Fr(3n),
    },
active_at_block: {
      slot: new Fr(4n),
    }
      } as ContractStorageLayout<'admin' | 'tally' | 'vote_ended' | 'active_at_block'>;
    }
    

  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    
    /** cast_vote(candidate: field) */
    cast_vote: ((candidate: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, serialized_note: array) */
    compute_note_hash_and_optionally_a_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, compute_nullifier: boolean, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(admin: struct) */
    constructor: ((admin: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** end_vote() */
    end_vote: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_vote(candidate: field) */
    get_vote: ((candidate: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** public_dispatch(selector: field) */
    public_dispatch: ((selector: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** sync_notes() */
    sync_notes: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };

  
}
